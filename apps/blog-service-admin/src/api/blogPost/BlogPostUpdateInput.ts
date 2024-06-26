import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
