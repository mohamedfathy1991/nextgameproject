import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  
  return (
  <>
    <div  className=" container home py-5">

      <h1 className=" wellcome mb-5">  wellcome for games sites </h1>
      <Link href={'/product'}> <h2 className="my-5" > <button className=" btn btn-info">show games </button></h2></Link>
       

    </div>

  </>
    
    
   

  );
}
