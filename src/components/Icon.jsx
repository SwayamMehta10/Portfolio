import PropTypes from "prop-types";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

function Icon({ icon: IconComponent, duration, color = "" }) {
	return (
		<motion.div
			variants={iconVariants(duration)}
			initial="initial"
			animate="animate"
			className="rounded-2xl border-4 border-neutral-800 p-6"
		>
			<IconComponent className={`text-6xl ${color}`} />
		</motion.div>
	);
}
Icon.propTypes = {
	icon: PropTypes.elementType.isRequired,
	duration: PropTypes.number.isRequired,
	color: PropTypes.string,
};

export default Icon;
