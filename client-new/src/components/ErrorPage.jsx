const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
            <h1>404</h1>
            <p>Oops! Page not found.</p>
            <a href="/">Go Home</a>
        </div>
    );
}

export default NotFound;