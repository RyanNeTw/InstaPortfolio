import PropTypes from "prop-types";

function OrganisationList(props) {
  const organisations = props.organisation;

  return (
    <>
      <div className="flex flex-row gap-2 items-center overflow-auto pl-2 pr-2">
        {organisations && organisations?.length > 0
          ? organisations.map((organisation, index) => {
              return (
                <div
                  key={index}
                  className="hover:bg-zinc-600 rounded border border-zinc-600 text-ellipsis"
                >
                  <a
                    href={"https://github.com/" + organisation.login}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row whitespace-nowrap items-center gap-2 pl-4 pr-4 pt-2 pb-2"
                  >
                    <img
                      src={organisation.avatar_url}
                      alt={organisation.avatar_url}
                      className="w-8 h-8"
                    />
                    <h2 className="text-white inline">{organisation.login}</h2>
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

OrganisationList.propTypes = {
  organisation: PropTypes.array.isRequired,
};

export default OrganisationList;
