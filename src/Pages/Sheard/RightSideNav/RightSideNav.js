import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaTwitch, FaWhatsapp, FaFacebook } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className="mb-2" variant="outline-primary"><FaGoogle></FaGoogle> Google with login</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Github with login</Button>
            </ButtonGroup>
            <div>
                <h5 className="mt-5 mb-3">Find Us on</h5>

                <ListGroup>
                    <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;