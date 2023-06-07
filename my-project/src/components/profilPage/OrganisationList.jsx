import PropTypes from 'prop-types';

function OrganisationList(props) {
const organisations = props.organisation

    return(
        <>
            <div className='flex flex-row justify-center items-center pt-4'>
            { organisations ? 
                    organisations.map((organisation, index) => {
                        return(
                            <div key={index} className='inline-block hover:bg-zinc-600 rounded border border-zinc-600'>
                                <a href={'https://github.com/' + organisation.login} target="_blank" rel="noopener noreferrer" className='flex flex-row items-center gap-4 pl-4 pr-4 pt-2 pb-2'>
                                    <img src={organisation.avatar_url} alt={organisation.avatar_url} className='w-8 h-8'/>
                                    <h2 className='text-white'>{organisation.login}</h2>
                                </a>
                            </div>
                        )
                    }) :null
            }
            </div>
        </>
    )
}

OrganisationList.propTypes = {
    organisation: PropTypes.array.isRequired,
  };

export default OrganisationList