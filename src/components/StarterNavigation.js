import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian'
import Navigation, {
  AkContainerTitle,
  AkNavigationItemGroup,
  AkNavigationItem
} from '@atlaskit/navigation'

class RoutedNavigationItem extends Component {
  render () {
    const { className, href, children } = this.props

    return (<Link className={ className } to={ href }>{ children }</Link>)
  }
}

export default class StarterNavigation extends Component {

  render() {

    return (
      <Navigation
        globalPrimaryIcon={<AtlassianIcon label='Atlassian' size="xlarge" />}
        globalPrimaryItemHref="/"
        containerHeaderComponent={() => (<AkContainerTitle
          icon={<AtlassianIcon label='Atlassian' />}
          text="Nav Title"
        />)}>
        <AkNavigationItemGroup>
          <AkNavigationItem
            text="Home"
            href="/"
            linkComponent={RoutedNavigationItem} />
          
          <AkNavigationItem
            text="Dashboard"
            href="dashboard"
            linkComponent={RoutedNavigationItem} />
        </AkNavigationItemGroup>
      </Navigation>
    )
  }
}