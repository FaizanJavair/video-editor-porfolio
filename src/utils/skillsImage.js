
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import davinci from '../assets/png/DaVinci-Resolve-Logo-Square.png'
import canva from '../assets/svg/skills/canva.svg'
import audacity from '../assets/png/icons8-audacity-240.png'
import express from '../assets/png/Adobe_Express_logo.png'
import color from '../assets/png/color-grade.png'
import premiere from '../assets/png/premierpro.png'
import light from '../assets/png/lightroom.png'
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        
        case 'photoshop':
            return photoshop;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects; 
        case 'premiere pro':
            return premierepro;  
        case 'canva':
            return canva;
        case 'davinci resolve':
            return davinci;
        case 'audacity':
            return audacity;
        case 'adobe express':
            return express;
        case 'color grading':
            return color;
        case 'lightroom':
            return light;
        default:
            break;
    }
}
