
import ReactMarkdown from "react-markdown";
import { Components } from "@components/Markdown/Components";
import remarkGfm from 'remark-gfm'


export default function Markdown(props: any) {
  const { children } = props;

  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={Components}>{children}</ReactMarkdown>;
}
