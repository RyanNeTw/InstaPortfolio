import PropTypes from 'prop-types';

function ProfilPage(props) {
console.log(props.user.data.company)
console.log(props.user.data, "dddd")

const user = props.user.data
console.log(user.login)
    return(
        <>
            <div  className="pl-36">
                <h1 className='text-white'>sddddfsdfssdlkfnefklvndkjfb dkjfb dkjfbvdkfjbvdkbndk</h1>
                <div>
                    <h2 className='text-white'>{ user.login }</h2>
                </div>
            </div>
        </>
    )
}

ProfilPage.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired 
  };


export default ProfilPage