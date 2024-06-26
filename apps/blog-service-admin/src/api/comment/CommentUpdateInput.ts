import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  content?: string | null;
  postedAt?: Date | null;
};
