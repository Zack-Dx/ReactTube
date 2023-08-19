import PropTypes from "prop-types";

export default function NavSearchLoader({ Loader }) {
  return (
    <div className="absolute flex justify-center h-24 w-[500px] -right-28 bg-white top-16 py-10 z-40">
      <Loader color="#d63636" size={8} />
    </div>
  );
}

NavSearchLoader.propTypes = {
  Loader: PropTypes.func.isRequired,
};
