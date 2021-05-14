import Image from 'next/image'

function Home() {
    return (
        <div>
            <h1>iShopee!!!</h1>
            <image
                src="/webMockup.png"
                alt="webpage design"
                width={500}
                height={500}
            />
        </div>
    )
}

export default Home