const WebsiteDesign = () => {
    const galleryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '10px 0',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
    };

    const imageHoverStyle = {
        transform: 'scale(1.05)',
    };

    return (   
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                    Website Design <br /> that works
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Creating, designing and developing websites that work for your business.
                </p>
            </div>

            <div style={galleryStyle}>
                <img 
                    src="/images/design/design1.jpeg" 
                    alt="Design 1" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img 
                    src="/images/design/design2.jpeg" 
                    alt="Design 2" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img 
                    src="/images/design/design3.jpeg" 
                    alt="Design 3" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img 
                    src="/images/design/design4.jpeg" 
                    alt="Design 4" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                  <img 
                    src="/images/design/design4.jpeg" 
                    alt="Design 5" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                 <img 
                    src="/images/design/logo.jpeg" 
                    alt="Design 6" 
                    style={imageStyle} 
                    onMouseOver={(e) => e.currentTarget.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>
        </div>
    );
}

export default WebsiteDesign;
