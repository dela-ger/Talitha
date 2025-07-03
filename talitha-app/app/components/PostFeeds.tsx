"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Post = {
  id: string;
  user_id: string;
  content: string;
  image_url?: string | null;
  created_at: string;
};

type Profile = {
  id: string;
  full_name?: string | null;
  avatar_url?: string | null;
};

export default function PostFeeds({ refreshTrigger }: { refreshTrigger: number }) {
  const supabase = createClientComponentClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [profiles, setProfiles] = useState<Record<string, Profile>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (postsError || !postsData) {
        console.error("Error fetching posts:", postsError);
        setLoading(false);
        return;
      }

      setPosts(postsData);

      const userIds = postsData.map((post) => post.user_id);
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("id, full_name, avatar_url")
        .in("id", userIds);

      if (profilesError) {
        console.error("Error fetching profiles:", profilesError);
      } else if (profilesData) {
        const profilesMap = profilesData.reduce((acc, profile) => {
          acc[profile.id] = profile;
          return acc;
        }, {} as Record<string, Profile>);
        setProfiles(profilesMap);
      }

      setLoading(false);
    };

    fetchData();
  }, [refreshTrigger]); // 🔁 refetch when refreshTrigger changes

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffHours < 168) return `${Math.floor(diffHours / 24)}d ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="space-y-6 py-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-6 border border-[#cedbe8]"
          >
            <div className="flex items-start gap-3">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 py-8">
      {posts.map((post) => {
        const user = profiles[post.user_id];

        return (
          <div
            key={post.id}
            className="bg-white shadow rounded-xl p-6 border border-[#cedbe8]"
          >
            <div className="flex items-start gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
                style={{
                  backgroundImage: user?.avatar_url
                    ? `url(${user.avatar_url})`
                    : 'url("https://placehold.co/40x40?text=?")',
                }}
              ></div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">
                    {user?.full_name || "Anonymous"}
                  </p>
                  <p className="text-[#49719c] text-sm font-normal leading-normal">
                    {formatTime(post.created_at)}
                  </p>
                </div>

                <p className="text-[#0d141c] text-sm font-normal leading-normal whitespace-pre-line mb-4">
                  {post.content}
                </p>

                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt="Post image"
                    className="rounded-lg max-h-80 object-cover w-full mb-4"
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}

      {posts.length === 0 && (
        <p className="text-center text-[#49719c] py-10">
          No posts yet. Be the first to share something!
        </p>
      )}
    </div>
  );
}
