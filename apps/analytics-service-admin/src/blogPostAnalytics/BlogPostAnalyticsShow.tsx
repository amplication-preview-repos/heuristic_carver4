import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlogPostAnalyticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BlogPostId" source="blogPostId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Likes" source="likes" />
        <TextField label="Shares" source="shares" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Views" source="views" />
      </SimpleShowLayout>
    </Show>
  );
};
