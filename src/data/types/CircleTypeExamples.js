// Everything has base tags, viewers, title, description

media(image): {
  tags: [], // for searching
  title: '', // ALT text
  description: '',
  value: '',
}
media(video): {
  tags: [], // for searching
  title: '', // ALT text
  description: '',
  value: '',
}
media(gif): {
  tags: [], // for searching
  styles: '',
  title: '', // ALT text
  description: '',
  value: '',
}

header {
  tags: [],
  styles: '',
  title: '',
  subtitle: '',
  description: '',
}

text {
  ...reg,
  media: '',
  styles: '',
  title: '',
  description: '',
  value: '',
}

displayBlock {
  media
  title
  des
  sub
  styles
  text: { // DraftJS?
    "action": {
      "title": "Contact us",
      "link": ""
    }
  }
}

displayBlockUniversal { // Renders page to display any content types
  ...reg
  lines {
    
  }
}

// List of cards
// Small list
lines {
  ...reg,
  media(image): {},
  styles: '',
  title: '',
  subtitle: '',
  description: '',
  linesMany: {
    edges {
      node {
        media(whatever) {}
        title: '',
        subtitle: '',
        description: '',

      }
    }
  }
}

// PAGE = only one with displaying content types fully, Sub Page Cards are just headers + content type maybe

// Large list
// Based on last update date
lines {
  lines [
    '2017s_id': ['allitschildren']
    '2016s_id': ['allitschildren']
    '...etc'
  ]
}

// Very large list
// Based on last update date
lines {
  lines [
    '2017s_id': {
      lines: [
        'Month': ['allitschildren'],
        'Month': ['allitschildren'],
        '...etc'
      ]
    },
    '2016s_id'{
      lines: [
        'Month': ['allitschildren'],
        'Month': ['allitschildren'],
        '...etc'
      ]
    },
    '...etc'
  ]
}