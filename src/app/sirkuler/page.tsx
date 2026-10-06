import { CircularsIndex, circularsMetadata } from './CircularsIndex';

export const metadata = circularsMetadata(1);

export default function CircularsPage() {
  return <CircularsIndex page={1} />;
}
