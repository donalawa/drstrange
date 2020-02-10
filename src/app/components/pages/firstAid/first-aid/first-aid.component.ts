import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.component.html',
  styleUrls: ['./first-aid.component.css']
})
export class FirstAidComponent implements OnInit {
  firstAids=[
    {
      condition: 'Difficulty Breathing',
      first_aid: "Check the person's airway, breathing, and pulse. If necessary, begin CPR. Loosen any tight clothing. Continue to monitor the person's breathing and pulse until medical help arrives. If there are open wounds in the neck or chest, they must be closed immediately, especially if air bubbles appear in the wound. Bandage such wounds at once. A 'sucking' chest wound allows air to enter the person's chest cavity with each breath."
    },
    {
      condition: "snake bite",
      first_aid: "Rest quietly in a position that is comfortable for you and try to remain calm and as still as possible. Firmly apply a broad pressure bandage (10-15cm wide) over the bite as soon as possible."
    },
    {
      condition: "collapses",
      first_aid: "If there are no injuries and the person is breathing, raise the person's legs above the heart level of about 12 inches (30 centimeters). Loosen belts, collars or other constrictive clothing. To reduce the chance of fainting again, don't get the person up too quickly. If the person doesn't regain consciousness within one minute, call for medical attention."
    },
    {
        condition: 'Drowning',
        first_aid: "Turn the drowning person's head to the side, allowing any water to drain from his or her mouth and nose then turn the head back to the center. Begin mouth-to-mouth resuscitation on land, or in the water, if the injured person needs immediate life-and-death measures. Strongly breathe four times into the mouth of the injured person as you pinch his or her nose. After four strong breaths, put your ear near the mouth and watch the chest for any breathing movement. Check the pulse for signs of life and repeat the cycle."
    },
    {
      condition: 'Nosebleeding',
      first_aid: "Have the person sit up straight and lean forward slightly. Don't have the person lie down or tilt the head backward. With thumb and index finger, firmly pinch the nose just below the bone up against the face. Apply pressure for 5 minutes. Time yourself with a clock. If bleeding continues after 5 minutes, repeat the process."
    },
    {
      condition: 'Cut',
      first_aid: 'You need to control the bleeding straight away by applying pressure directly to the wound with a clean dressing. Call emergency services as soon as possible'
    },
    {
        condition: 'Choke',
        first_aid: 'You should give the person five blows on the back while they lean forwards. If this fails then attempt five abdominal thrusts (although abdominal thrusts should not be attempted on babies, pregnant women or obese people). Putting your fingers down their throat may cause damage'
    },
    {
        condition: 'burn',
        first_aid: 'First, run the burn under cold water for at least 20 minutes. After this, you can wrap the burn in a clean plastic bag to prevent infection. If necessary, call for emergency services.'
    },
    {
        condition: 'Sprain',
        first_aid: 'Support the injury with cushions or clothing to prevent more damage and help relieve the pain. Call emergency services. If they are in a lot of pain, try not to move them to minimize further pain or damage'
    },
    {
        condition: 'Chest Pain',
        first_aid: 'You should sit the person in a comfortable position to relieve the strain on their heart, while someone calls for the emergency services'
    },
    {
        condition: 'Seizure',
        first_aid: 'Keep them safe from injury. Do not restrain the person as this may injure them or you. Use clothing or a blanket to protect their head and let the seizure resolve'
    },
    {
        condition: 'Unconsiousness',
        first_aid: 'Check if the airway is clear by tilting the head and lifting the chin to open the airway. If the person is breathing, place them in the recovery position. CPR should only be done if someone is not breathing'
    },
    {
        condition: 'Electrical Shock',
        first_aid: 'You should switch off the electrical current at the mains to break the contact between the person and the electrical supply. Do not touch the person until the power supply is off'
    }
]
  constructor() { }

  ngOnInit() {
  }

}
