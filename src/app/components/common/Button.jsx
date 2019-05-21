const Button = props => {
    const { state, ...other } = props;
    const className = state.isActive ? "active" : "inactive";
    return <button className={className} {...other} />;
  };