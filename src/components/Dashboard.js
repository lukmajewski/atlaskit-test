import React, { Component } from 'react';
import Tabs from '@atlaskit/tabs'
import DynamicTable from '@atlaskit/dynamic-table'
import axios from 'axios'


const sortKey = 'first_name';
const secondSortKey = 'last_name';

const head = {
  cells: [
    {
      key: sortKey,
      content: 'First name',
      isSortable: true,
    },
    {
      key: secondSortKey,
      content: 'Last name',
      isSortable: true,
    },
  ],
};

const rows = [
  {
    cells: [
      {
        key: 'baob',
        content: 'Barack',
      },
      {
        content: 'Obama',
      },
    ],
    key: '1'
  },
  {
    cells: [
      {
        key: 'dotr',
        content: 'Donald',
      },
      {
        content: 'Trump',
      },
    ],
    key: '2'
  },
  {
    cells: [
      {
        key: 'hicl',
        content: 'Hillary',
      },
      {
        content: 'Clinton',
      },
    ],
    key: '3'
  },
  {
    cells: [
      {
        key: 'tjeff',
        content: 'Thomas',
      },
      {
        content: 'Jefferson',
      },
    ],
    key: '4'
  },
];

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      head: head,
      rows: rows
    }
  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const rows = response.data.map(item => ({
          cells: [
            {
              key: item.id,
              content: item.title
            },
            {
              content: item.url
            }
          ]
        }))

        this.setState({ rows: rows })
      })
  }

  renderTable() {

    return (
      <DynamicTable
        caption="caption"
        head={this.state.head}
        rows={this.state.rows}
        defaultSortKey={sortKey}
        defaultSortOrder="ASC"
        rowsPerPage={20}
      />
    )
  }

  render() {
    return (
      <Tabs tabs={[
        { label: 'Tab 1', content: this.renderTable() },
        { label: 'Tab 2', content: <div>Tab 2</div>},
      ]} />
    )
  }
}