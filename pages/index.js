import Image from 'next/image'

function Home() {
    return (
        <div>
            <h1>iShopee!!!</h1>
            <image
                src="https://github.com/tfpresentes/landing-page/raw/main/img/webMockup.png"
                alt="webpage design"
                width={500}
                height={500}
            />
        </div>
    )
}

export default Home