import React, { Component } from 'react';
import './SiteCarousel.css';

import {
	Card,
	CardHeader,
	CardBody,
	Button,
	CardText,
	Nav,
	Navbar,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	//UncontrolledCarousel,
} from 'reactstrap';
const items = [
	{
		src:
			'https://cdn.pixabay.com/photo/2017/06/13/22/43/interior-2400372__340.jpg',
		// 'https://pixabay.com/photos/home-interior-room-house-furniture-1438305/',
		//'https://avatars1.githubusercontent.com/u/8445?v=4',
		altText: 'livingroom',
	},
	{
		src:
			'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168__340.jpg',
		//'https://avatars1.githubusercontent.com/u/8445?v=4',
		// 'https://pixabay.com/photos/home-interior-room-house-furniture-1438305/',
		altText: 'kitchen',
	},
	{
		src:
			'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940175__340.jpg',
		//'https://avatars1.githubusercontent.com/u/8445?v=4',
		//'https://pixabay.com/photos/home-interior-room-house-furniture-1438305/',
		altText: 'bedroom',
	},
	{
		src:
			'https://cdn.pixabay.com/photo/2015/12/05/23/38/nursery-1078923__340.jpg',
		//'https://avatars1.githubusercontent.com/u/8445?v=4',
		//'https://pixabay.com/photos/home-interior-room-house-furniture-1438305/',
		altText: 'bedroom',
	},
];

export default class SiteCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0, modal: false };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}
	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}
	render() {
		const { activeIndex } = this.state;
		//const slides = this.state.property.images.map(img => key => item.src);
		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img className="carouselImage" src={item.src} alt={item.altText} />
					<CarouselCaption captionText={''} captionHeader={''} />
				</CarouselItem>
			);
		});
		return (
			<div>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators
						items={items}
						activeIndex={activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{slides}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/>
				</Carousel>
			</div>
		);
	}
}
