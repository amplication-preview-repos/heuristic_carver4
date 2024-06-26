import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostAnalyticsWhereInput = {
  blogPostId?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
};
