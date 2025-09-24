import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>به نسل مهدی خوش آمدید</h2>
        <p>کمک به مردم مظلوم، آموزش، اخبار صحیح و مسابقات علمی</p>
        <div style={{ marginTop: '20px' }}>
          <iframe width="560" height="315" src="https://www.aparat.com/video/video_embed/videocode" frameBorder="0" allowFullScreen></iframe>
        </div>
      </main>
      <Footer />
    </div>
  )
}
