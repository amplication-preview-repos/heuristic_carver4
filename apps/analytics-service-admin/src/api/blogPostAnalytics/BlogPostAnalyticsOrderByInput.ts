import { SortOrder } from "../../util/SortOrder";

export type BlogPostAnalyticsOrderByInput = {
  blogPostId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
