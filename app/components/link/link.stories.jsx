import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://sites.google.com/view/axif/home">Primary link</Link>
    <Link secondary href="https://sites.google.com/view/axif/home">
      Secondary link
    </Link>
  </StoryContainer>
);
