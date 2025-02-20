export default function SocialIcon(props) {
  return (
    <a
      className="social-icon"
      href={props.url}
      title="LinkedIn"
      target="_blank"
    >
      <i
        data-feather={props.icon}
        className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
      ></i>
    </a>
  );
}
