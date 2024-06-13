import { Table, TableCell, TableRow } from '~/components/table';
import { StoryContainer } from '../../../.storybook/story-container';
import { TableBody, TableHead, TableHeadCell } from './table';

export default {
  title: 'Table',
};

export const Default = () => (
  <StoryContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Country</TableHeadCell>
          <TableHeadCell>State</TableHeadCell>
          <TableHeadCell>Place</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>India</TableCell>
          <TableCell>TamilNadu</TableCell> 
          <TableCell>Coimbatore</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryContainer>
);
