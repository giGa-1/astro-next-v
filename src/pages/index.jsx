import SceneComp from "../components/Scene/SceneComp";
import Header from "../components/Header/Header";

import Head from 'next/head';
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <>
        <Head>
          <meta
            name="Astronauts in 3D"
            content="Astronauts in spase, big boom, meteor, 3D"
          />
        </Head>
        <Header/>
        <Canvas className="canvas">
          <SceneComp/>
        </Canvas>
    </>
  )
}
