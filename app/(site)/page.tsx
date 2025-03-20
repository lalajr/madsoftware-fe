import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <div>
          <div className="bg-crimson h-10 w-10"></div>
          <div className="bg-madsoft-charcoal h-10 w-10"></div>
          <div className="bg-soft-white h-10 w-10"></div>
          <div className="bg-silver-gray h-10 w-10"></div>
          <div className="bg-deep-charcoal h-10 w-10"></div>
          <div className="bg-muted-gray h-10 w-10"></div>
        </div>
      </div>
    </Layout>
  );
}
