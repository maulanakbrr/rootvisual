import CustomContainer from "@/components/CustomContainer"
import Loader from "@/components/Loader"

const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Loading = () => {
  return (
    <CustomContainer>
      <div style={style}>
        <Loader/>
      </div>
    </CustomContainer>
  )
}

export default Loading