import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PieChart } from './pieChart';
import { LineChart } from './lineChart';

import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    PieChart,
    LineChart,
    Todo,
    Calendar,
    Dashboard
  ],
  providers: [
    CalendarService,
    LineChartService,
    PieChartService,
    TodoService,
  ]
})
export default class DashboardModule {}
