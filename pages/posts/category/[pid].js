import { useRouter } from "next/router";

const CategoryPosts = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Category: {pid}</p>;
};

export default CategoryPosts;
