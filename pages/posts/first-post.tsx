import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'



const FirstPost = () => {

    return (
        
    <Layout home>
        <div>
            <Head>
                <title>This is my first post</title>
            </Head>
            <h1>First Post</h1>
            <h2><Link href="/"><a>Back to Home!</a></Link></h2>
        </div>
    </Layout>

    )
}

export default FirstPost