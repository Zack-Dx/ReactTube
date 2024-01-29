import PropTypes from "prop-types";

export default function NavSearchLoader({ Loader }) {
    return (
        <div
            data-testid="loader"
            className="absolute flex justify-center rounded-md h-24 w-[300px] -left-14 bg-white top-16 py-10 z-40"
        >
            <Loader color="#36d7b7" size={8} />
        </div>
    );
}

NavSearchLoader.propTypes = {
    Loader: PropTypes.func.isRequired,
};
