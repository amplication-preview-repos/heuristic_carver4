import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const BlogPostAnalyticsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="BlogPostId" source="blogPostId" />
        <NumberInput step={1} label="Likes" source="likes" />
        <NumberInput step={1} label="Shares" source="shares" />
        <NumberInput step={1} label="Views" source="views" />
      </SimpleForm>
    </Create>
  );
};
