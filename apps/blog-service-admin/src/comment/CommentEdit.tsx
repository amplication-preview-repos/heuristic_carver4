import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="BlogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PostedAt" source="postedAt" />
      </SimpleForm>
    </Edit>
  );
};
