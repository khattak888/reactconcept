

function LoaderHoc (Component){
    return function WrappedComponent({isLoading,...props}) {
      if(isLoading) return <p>Hold on, fetching data might take somtime.</p>
      return <Component {...props} />
    }

}
export default LoaderHoc