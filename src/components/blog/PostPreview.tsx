import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { DateTime } from "../ui/DateTime";

const PostPreviewStyles = styled.article`
  margin-bottom: 1rem;
`;

const PostHeading = styled.h2`
  margin-bottom: 0.5rem;
  a {
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.3rem;
  }
`;

const EmojiWrapper = styled.span`
  font-size: 0.9rem;
`;

interface PostPreviewProps {
  slug: string;
  title: string;
  excerpt: string;
  formattedDate: string;
  rawDate: string;
  emoji?: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  slug,
  title,
  excerpt,
  formattedDate,
  rawDate,
  emoji,
}) => {
  return (
    <PostPreviewStyles>
      <DateTime dateTime={rawDate}>{formattedDate}</DateTime>

      <PostHeading>
        <Link to={slug}>{title}</Link> <EmojiWrapper>{emoji}</EmojiWrapper>
      </PostHeading>

      <div>
        <p>{excerpt}</p>
      </div>
    </PostPreviewStyles>
  );
};

export default PostPreview;
