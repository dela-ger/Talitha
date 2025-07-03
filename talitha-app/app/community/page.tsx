"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
// import { ImagePlus } from "lucide-react";
import {  X } from "lucide-react";
import PostFeeds from "../components/PostFeeds";

export default function CreatePostForm() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [refreshCount, setRefreshCount] = useState(0); // 🔁 track refresh
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    setIsUploading(true);
    setError("");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
        const filePath = `public/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("post-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("post-images")
        .getPublicUrl(filePath);

      setImageUrl(publicUrl);
    } catch (error) {
        console.error("Image upload error:", error);
        setError("Failed to upload image");
      
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const user = await supabase.auth.getUser();

    if (!user.data.user) {
      setError("You must be logged in to post");
      return;
    }

    try {
      const { error } = await supabase.from("posts").insert({
        content,
        image_url: imageUrl || null,
        user_id: user.data.user.id,
      });

      if (error) throw error;

      setContent("");
      setImageUrl("");
      setError("Post created successfully!");

      // ⏫ Trigger refresh in PostFeed
      setRefreshCount((prev) => prev + 1);

      setTimeout(() => setError(""), 3000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Error creating post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your heart?"
            className="w-full border rounded p-3 mb-3"
            rows={4}
            required
          />
          {imageUrl && (
            <div className="relate group mb-3">
              <Image
                  src={imageUrl}
                  alt="preview"
                  width={800}
                  height={400}
                  className="rounded w-full max-h-60 object-cover"
                />

              <button
                type="button"
                onClick={() => setImageUrl("")}
                className="absolute top-2 right-2 bg-black text-white p-1 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-lime-600"
            >
              {/* <ImagePlus size={20} className="inline" /> Add image */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
              />
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="bg-lime-600 text-white px-4 py-2 rounded"
            >
              {isUploading ? "Posting..." : "Post"}
            </button>
          </div>
          {error && (
            <p className={`mt-2 text-sm ${error.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {error}
            </p>
          )}
        </form>

        <PostFeeds refreshTrigger={refreshCount} />
      </div>
    </div>
  );
}
