import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {
  healthTips = [
    {
      title: 'Exercise your body for a happy mind',
      content: 'A little exercise will go a long way to reducing stress. Even just a brisk walk in the morning will energize and motivate you for the day ahead. Set your alarm for a little earlier than usual and hit the pavement. Save time by preparing the night before. Lay out your exercise clothes so that you can get going with minimal preparation time.'
    },
    {
      title: 'Quick morning meditation',
      content: 'A quick five or ten-minute meditation each morning will help balance your mind for the busy day ahead. Take a few moments to relax before you begin preparing for the day. Think about all the things you are grateful for and give yourself some positive encouragement.'
    },
    {
      title: 'Keep a journal',
      content: 'Writing is a therapeutic activity. In just a few minutes, you can write your thoughts, worries, gratitude, or whatever else comes to mind. Keep the journal near your bed and make a habit of writing a few paragraphs or even sentences each night before you go to sleep.'
    },
    {
      title: 'Read a book or a magazine',
      content: 'We all need to escape from the pressing concerns of reality once in a while. On your next lunch break get away from your computer and pick up a book in your favorite genre or a hobby magazine. Reading is a relaxing activity that helps us escape from the pressures of our lives.'
    },
    {
      title: 'Call an old friend',
      content: 'Reconnect with someone you haven’t had time to talk to in a while. Busy lives get in the way of friendship. Career, family, responsibility makes us forget those who are dear to us. Friends become distant memories. In the social media age, people tend to keep track of friends through various social media sites, but rarely ever pick up the phone.'
    },
    {
      title: 'Schedule time for yourself',
      content: ' When we fill out our calendars for the day, we usually don’t schedule in time for ourselves. We remember important conference calls, meetings, and deadlines. Next time you start filling out your daily calendar schedule blocks of time for yourself. Schedule time in the morning for some exercise. Schedule time in the evening to visit with friends.'
    },
    {
      title: 'Unplug from technology',
      content: ' People tend to grab their phone first thing when waking up. Then work begins. Checking email leads to replying to email and before you know it, it’s time to get up and get ready for work. Leave the electronics alone until you’ve given yourself time to prepare for the day. Make time for breakfast (the most important meal of the day) and save the email for the end of your morning ritual.'
    },
    {
      title: 'Take a pre-made meal to eat for lunch',
      content: 'We don’t spend enough time taking care of our bodies. Lunch consists of dining out, which is not always healthy. Pre-pack your lunch the night before and nurture your body with nutritious food. Take your lunch away from your desk and relax.'
    },
    {
      title: 'Get enough sleep',
      content: 'When you’re a busy working professional life is hectic. We don’t give our bodies as much rest as they need to fully function. Pretty soon we find ourselves running on empty. Sleep is not only good for the body, but it is also good for the mind. A well-rested body and mind can accomplish great things.'
    },
    {
      title: 'Make your weekend about you, not work',
      content: 'Many people take their work home with them and never really get a day off. Take time on the weekend to do things you enjoy. Spend more time with your family, not with your home office. Take a mini vacation. Limit distractions by resisting the urge to check email. Participate in hobbies or activities that you enjoy. Join a local sports team or volunteer at your favorite organization.'
    },
    {
      title: 'Remind yourself that you are fabulous',
      content: ' Don’t let deadlines and a demanding job get you down. Remind yourself of all the things you have accomplished and don’t get caught up in problems or failures. You are not your job and taking the time to remember things that define you as an individual outside your work will contribute significantly to peace of mind.'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
