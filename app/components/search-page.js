import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class PeopleListComponent extends Component {

  @tracked query = "Blackpink";

  @tracked images = [
    {
        type: 'gif',
        id: '3otPozwo7SmI6OXvRC',
        url: 'https://giphy.com/gifs/kpop-k-pop-red-velvet-3otPozwo7SmI6OXvRC',
        slug: 'kpop-k-pop-red-velvet-3otPozwo7SmI6OXvRC',
        bitly_gif_url: 'http://gph.is/2ko5h6L',
        bitly_url: 'http://gph.is/2ko5h6L',
        embed_url: 'https://giphy.com/embed/3otPozwo7SmI6OXvRC',
        username: '',
        source: 'https://www.youtube.com/watch?v=J0h8-OTC38I',
        title: 'k-pop GIF',
        rating: 'pg',
        content_url: '',
        source_tld: 'www.youtube.com',
        source_post_url: 'https://www.youtube.com/watch?v=J0h8-OTC38I',
        is_sticker: 0,
        import_datetime: '2017-01-31 21:24:59',
        trending_datetime: '0000-00-00 00:00:00',
        images: {
          original: {
            height: '232',
            width: '480',
            size: '6477035',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy.gif&ct=g',
            mp4_size: '603382',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy.mp4&ct=g',
            webp_size: '2487804',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy.webp&ct=g',
            frames: '90',
            hash: '7e70c2194683cff74f3f29b699652ff7',
          },
          downsized: {
            height: '120',
            width: '250',
            size: '1127776',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-downsized.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-downsized.gif&ct=g',
          },
          downsized_large: {
            height: '232',
            width: '480',
            size: '6477035',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy.gif&ct=g',
          },
          downsized_medium: {
            height: '185',
            width: '384',
            size: '3588799',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-downsized-medium.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-downsized-medium.gif&ct=g',
          },
          downsized_small: {
            height: '84',
            width: '173',
            mp4_size: '188209',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-downsized-small.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-downsized-small.mp4&ct=g',
          },
          downsized_still: {
            height: '120',
            width: '250',
            size: '7911',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-downsized_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-downsized_s.gif&ct=g',
          },
          fixed_height: {
            height: '200',
            width: '414',
            size: '4907875',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200.gif&ct=g',
            mp4_size: '440172',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200.mp4&ct=g',
            webp_size: '1968682',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200.webp&ct=g',
          },
          fixed_height_downsampled: {
            height: '200',
            width: '414',
            size: '303263',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200_d.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200_d.gif&ct=g',
            webp_size: '120426',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200_d.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200_d.webp&ct=g',
          },
          fixed_height_small: {
            height: '100',
            width: '207',
            size: '1295049',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100.gif&ct=g',
            mp4_size: '170232',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100.mp4&ct=g',
            webp_size: '628364',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100.webp&ct=g',
          },
          fixed_height_small_still: {
            height: '100',
            width: '207',
            size: '6203',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100_s.gif&ct=g',
          },
          fixed_height_still: {
            height: '200',
            width: '414',
            size: '21698',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200_s.gif&ct=g',
          },
          fixed_width: {
            height: '96',
            width: '200',
            size: '1264967',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w.gif&ct=g',
            mp4_size: '162736',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w.mp4&ct=g',
            webp_size: '647360',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w.webp&ct=g',
          },
          fixed_width_downsampled: {
            height: '96',
            width: '200',
            size: '82547',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w_d.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w_d.gif&ct=g',
            webp_size: '39024',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w_d.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w_d.webp&ct=g',
          },
          fixed_width_small: {
            height: '48',
            width: '100',
            size: '348885',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100w.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100w.gif&ct=g',
            mp4_size: '47869',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100w.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100w.mp4&ct=g',
            webp_size: '212764',
            webp: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100w.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100w.webp&ct=g',
          },
          fixed_width_small_still: {
            height: '48',
            width: '100',
            size: '2006',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/100w_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=100w_s.gif&ct=g',
          },
          fixed_width_still: {
            height: '96',
            width: '200',
            size: '6296',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/200w_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=200w_s.gif&ct=g',
          },
          looping: {
            mp4_size: '1325300',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-loop.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-loop.mp4&ct=g',
          },
          original_still: {
            height: '232',
            width: '480',
            size: '26933',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy_s.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy_s.gif&ct=g',
          },
          original_mp4: {
            height: '232',
            width: '480',
            mp4_size: '603382',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy.mp4&ct=g',
          },
          preview: {
            height: '112',
            width: '232',
            mp4_size: '36250',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-preview.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-preview.mp4&ct=g',
          },
          preview_gif: {
            height: '66',
            width: '137',
            size: '47726',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-preview.gif?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-preview.gif&ct=g',
          },
          preview_webp: {
            height: '88',
            width: '182',
            size: '48934',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-preview.webp?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-preview.webp&ct=g',
          },
          hd: {
            height: '618',
            width: '1275',
            mp4_size: '2307682',
            mp4: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/giphy-hd.mp4?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=giphy-hd.mp4&ct=g',
          },
          '480w_still': {
            height: '232',
            width: '480',
            size: '6477035',
            url: 'https://media0.giphy.com/media/3otPozwo7SmI6OXvRC/480w_s.jpg?cid=893a822e7te6fuillbb376c15kydxu489x4t9w0bzqa0h0sh&rid=480w_s.jpg&ct=g',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPTNvdFBvendvN1NtSTZPWHZSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTg5M2E4MjJlN3RlNmZ1aWxsYmIzNzZjMTVreWR4dTQ4OXg0dDl3MGJ6cWEwaDBzaCZjdD1n',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvendvN1NtSTZPWHZSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTg5M2E4MjJlN3RlNmZ1aWxsYmIzNzZjMTVreWR4dTQ4OXg0dDl3MGJ6cWEwaDBzaCZjdD1n&action_type=SEEN',
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvendvN1NtSTZPWHZSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTg5M2E4MjJlN3RlNmZ1aWxsYmIzNzZjMTVreWR4dTQ4OXg0dDl3MGJ6cWEwaDBzaCZjdD1n&action_type=CLICK',
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvdFBvendvN1NtSTZPWHZSQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTg5M2E4MjJlN3RlNmZ1aWxsYmIzNzZjMTVreWR4dTQ4OXg0dDl3MGJ6cWEwaDBzaCZjdD1n&action_type=SENT',
          },
        },
      }
  ];

  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }

  @action
  doSearch() {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=iMzW2Do85luc5nuegflBS52b1vcxGITE&q=${this.query}&limit=12&offset=0&rating=g&lang=en`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data[0]);
                this.images = data.data;
            })
        console.log(this.images);
        
    }

    @action
    updateQuery(query){
        this.query = query;
    }

}
