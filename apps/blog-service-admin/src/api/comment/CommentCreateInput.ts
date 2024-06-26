import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  content?: string | null;
  postedAt?: Date | null;
};
