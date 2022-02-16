import Image from "next/image"

function LoadingScreen() {
  return (
    <div style={{position:'relative', width:'100%', height:'100vh'}}>
        <div style={{position:'absolute',top:'40%',left:'45%'}}>
            <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
        </div>
    </div>
  )
}
export default LoadingScreen