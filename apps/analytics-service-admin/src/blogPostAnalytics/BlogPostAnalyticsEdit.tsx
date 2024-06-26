import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BlogPostAnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="BlogPostId" source="blogPostId" />
        <NumberInput step={1} label="Likes" source="likes" />
        <NumberInput step={1} label="Shares" source="shares" />
        <NumberInput step={1} label="Views" source="views" />
      </SimpleForm>
    </Edit>
  );
};
