const Image = (props) => {
  const { src, alt, node, ...rest } = props;
  return <img className="markdown-image" src={src} alt={alt} {...rest} />;
};

export default Image;
