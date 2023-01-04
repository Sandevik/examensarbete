import Head from 'next/head'
import DomainMap from '../components/DomainMap';
import DomainTable from '../components/DomainTable';
import Loading from '../components/Loading';
import { useAllDomains } from '../hooks/useAllDomains';

export default function domains() {
    const {domains, loading} = useAllDomains()

    return (
        <div>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {loading ? <Loading /> : <DomainTable domains={domains ? domains : []} />}
          
         
        </div>
      )
}
