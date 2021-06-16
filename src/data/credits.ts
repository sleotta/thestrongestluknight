import { OrderedMap } from 'immutable'

export const credits: OrderedMap<CreditCategory, Contributor[]> = OrderedMap({
  Artwork: [
    {
      name: 'mop', url: 'https://www.pixiv.net/en/users/2083795',
      imageUrl: '../images/avatar/mop.png',
      artworks: [{
        title: 'どこの組のもんじゃい？',
        url: 'https://www.pixiv.net/en/artworks/79038147'
      }]
    }, {
      name: 'Yuusachii', url: 'https://twitter.com/SachiiHappy',
      imageUrl: '../images/avatar/SachiiHappy.jpg',
      artworks: [{
        title: 'Cozy Gen 4',
        url: 'https://www.pixiv.net/en/artworks/89126212'
      }, {
        title: 'New Year Hololive Gen4 Comfy',
        url: 'https://www.pixiv.net/en/artworks/86730174'
      }]
    }, {
      name: 'エニモ', url: 'https://twitter.com/ANYMORE_vvv',
      imageUrl: '../images/avatar/ANYMORE_vvv.jpg',
      artworks: [{
          title: 'ほろふぉーす愛',
          url: 'https://www.pixiv.net/en/artworks/89232325'
        }]
    }, {
      name: '銀鏡にと', url: 'https://twitter.com/shiromi_nito',
      imageUrl: '../images/avatar/shiromi_nito.jpg',
      artworks: [{
          title: '4期生アイドル衣装',
          url: 'https://www.pixiv.net/en/artworks/88113908'
        }]
    }, {
      name: 'colonel_AKI', url: 'https://twitter.com/ColonelAki',
      imageUrl: '../images/avatar/ColonelAki.jpg',
      artworks: [{
          title: 'Chibi Hololive #6',
          url: 'https://www.pixiv.net/en/artworks/84002989'
        }]
    }
  ],
  Organization: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      details: 'Project leader, internal translation',
      imageUrl: '../images/avatar/tam_vaccount.jpg'
    }, {
      name: 'みらい', url: 'https://twitter.com/Mirai_Malekith/',
      details: 'Internal translation',
      imageUrl: '../images/avatar/Mirai_Malekith.jpg'
    }, {
      name: 'こーでー', url: 'https://twitter.com/kody_lu',
      details: 'Internal translation',
      imageUrl: '../images/avatar/kody_lu.jpg'
    }, {
      name: 'いいおか', url: 'https://twitter.com/iiokayama8929',
      details: 'Internal translation',
      imageUrl: '../images/avatar/default_profile.png'
    }
  ],
  Website: [
    {
      name: 'タム・tam', url: 'https://twitter.com/tam_vaccount',
      imageUrl: '../images/avatar/tam_vaccount.jpg'
    },
    {
      name: 'monoAI', url: 'https://twitter.com/monoai_',
      details: 'Contributor',
      imageUrl: '../images/avatar/monoai_.jpg'
    },
    {
      name: 'Tom "Skeletom" Farro', url: 'https://www.twitter.com/fomtarro',
      details: 'Contributor',
      imageUrl: '../images/avatar/FomTarro.jpg'
    },
    {
      name: 'BetaLixT', url: 'https://twitter.com/BetaLixT',
      details: 'Contributor',
      imageUrl: '../images/avatar/BetaLixT.jpg'
    },
    {
      name: 'donmk',
      details: 'Contributor',
    },
  ],
  Clipping: [
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    // Please include the clipping channels' names and their Twitter URL
    // if no Twitter URL then their YouTube ch URL

    // https://www.youtube.com/playlist?list=PLAW64Usi0SJFIRk-2RzTVk9vExyIBhTHw&jct=HVa9mT52CFQx49UuCLQQNy1RsNLt0g
  ],
  'HimeCoco playlist': [
    // Please include the playlist contributors' names and
    // twitter url if they have a twitter account they use for luknight
    // activities.
    // ask them if needed.
    { name: 'Cain Chin', url: 'https://twitter.com/cain_chin' },
    { name: 'Marshall Lee', url: 'https://twitter.com/Marshall_Lee_A' },
    { name: 'Dodoliy', url: 'https://twitter.com/dodoliy'}
  ]
}) as OrderedMap<CreditCategory, Contributor[]>

export interface Contributor {
  name: string,
  url?: string,
  imageUrl?: string,
  details?: string,
  artworks?: Artwork[]
}

///////////////////////////////////////////////////////////////////////////////

const contributorCategories = [
  'Organization',
  'Website',
  'Artwork',
  'Clipping',
  'HimeCoco playlist'
] as const

type CreditCategory = typeof contributorCategories[number]

interface Artwork {
  title: string,
  url: string
}
