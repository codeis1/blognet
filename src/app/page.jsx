// pages/index.js
import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({ page }) {
  // Use the page prop to render the content
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  // Get the query parameters from the context object
  const { page } = context.query;

  // Parse the page as a number
  const parsedPage = parseInt(page) || 1;

  // Pass the page as a prop to the Home component
  return {
    props: {
      page: parsedPage,
    },
  };
}

// import Featured from "@/components/featured/Featured";
// import styles from "./homepage.module.css";
// import CategoryList from "@/components/categoryList/CategoryList";
// import CardList from "@/components/cardList/CardList";
// import Menu from "@/components/menu/Menu";

// export default function Home({ searchParams }) {
//   const page = parseInt(searchParams.page) || 1;

//   return (
//     <div className={styles.container}>
//       <Featured />
//       <CategoryList />
//       <div className={styles.content}>
//         <CardList page={page} />
//         <Menu />
//       </div>
//     </div>
//   );
// }
