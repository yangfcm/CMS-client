import { useRouter } from "next/router";

const TagPosts = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Tag: {pid}</p>;
};

export default TagPosts;
