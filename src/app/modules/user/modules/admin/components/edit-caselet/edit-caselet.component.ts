import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { PreloaderService } from 'src/app/services/preloader.service';
import { CaseletService } from 'src/app/services/caselet.service';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import { DataServiceService } from 'src/app/services/data-service.service';

const Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-edit-caselet',
  templateUrl: './edit-caselet.component.html'
})
export class EditCaseletComponent implements OnInit {

  admin = false;
  rejectComment;
  rejected = false;
  imageUploaded = false;
  caseletId;
  storyAdded;
  coverImage = '';
  technology: '+tag';
  technologies = [];
  accounts = [];
  contracts = [];
  industries = [];
  offerings = [];
  practice = [];
  services = [];
  verticals = [];
  tags = [];
  someTechnologies = ['JAVA', '.NET', 'ANGULAR'];
  tools = [];
  caseletForm: FormGroup;
  stepCount = 1;
  modules = {};
  savedCaselet: {};
  customerDetails;
  customerName;
  mid;
  author;
  quillEditorRef;
  reviewCaselet: any;
  editorStyle = {
    height: '20rem'
  };

  config = {
    toolbar: {
      container: ['bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        { 'list': 'ordered' }, { 'list': 'bullet' },
        { 'script': 'sub' }, { 'script': 'super' },
        { 'indent': '-1' }, { 'indent': '+1' },
        { 'direction': 'rtl' },
        { 'size': ['small', false, 'large', 'huge'] },
        { 'header': [1, 2, 3, 4, 5, 6, false] },
        { 'color': [] }, { 'background': [] },
        { 'font': [] },
        { 'align': [] },
        'image']
    },
    imageResize: {}
  };


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filterService: FilterService,
    private dataService: DataServiceService,
    private caseletSerivce: CaseletService) {
    this.modules = this.config;
  }

  ngOnInit() {
    this.buildCaseletForm();
    this.getFields();
    this.activatedRoute.params.subscribe((params) => {
      this.caseletId = params['caseletId'];
    });
    if (this.caseletId) {
      this.admin = true;
      this.getPendingCaselet(this.caseletId);
    }
  }

  onPracticeSelect(event) {
    console.log(event);
  }

  getPendingCaselet(caseletId) {
    this.caseletSerivce.getPendingCaselet(caseletId).subscribe((response: any) => {
      this.storyAdded = response.data.project;
      this.mid = response.data.project.userMid;
      this.patchingValueToForm(this.storyAdded);
    });
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler = (image, callback) => {
    const fileInput = <HTMLInputElement>document.getElementById('fileInputField');
    document.getElementById('fileInputField').onchange = () => {
      let file: File;
      file = fileInput.files[0];
      this.caseletSerivce.saveImage(file).subscribe((response: any) => {
        const imageUrlFromServer = response.data.imageUrl;
        const range = this.quillEditorRef.getSelection(true);
        const img = '<div> <img src=' + imageUrlFromServer + ' /> </div>';
        this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
        document.getElementById('fileInputField').setAttribute(null, null);
      });
    };
    fileInput.click();
  }

  getFields() {
    this.filterService.getMetaData().subscribe((response: any) => {
      this.accounts = response.data.metadata.accounts;
      this.contracts = response.data.metadata.contracts;
      this.industries = response.data.metadata.subVerticals;
      this.offerings = response.data.metadata.offerings;
      this.practice = response.data.metadata.practice;
      this.services = response.data.metadata.subPractices;
      this.tags = response.data.metadata.tag;
      this.technologies = response.data.metadata.technologies;
      this.tools = response.data.metadata.tools;
      this.verticals = response.data.metadata.verticals;
    });
  }

  patchingValueToForm(formData) {
    const technologies = [];
    const tools = [];
    const tags = [];
    console.log(formData);

    // tslint:disable-next-line:triple-equals
    if (formData.technologies != '') {
      formData.technologies.split(',').map(technology => {
        technologies.push({
          display: technology,
          value: technology
        });
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tools != '') {
      formData.tools.split(',').map(tool => {
        tools.push({
          display: tool,
          value: tool
        });
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tags != '') {
      formData.tags.split(',').map(tag => {
        tags.push(tag);
      });
    }


    this.caseletForm.patchValue({
      title: formData.title,
      description: formData.storyDescription,
      experts: formData.experts,
      technologies: technologies,
      tools: tools,
      tags: tags,
      account: formData.account,
      vertical: formData.vertical,
      domain: formData.domain,
      offering: formData.offering,
      engineering: formData.engineering,
      practice: formData.practice,
      contract: formData.contract,
      industry: formData.subVertical,
      service: formData.subPractice,
      customerName: formData.customerName,
      customerDetails: formData.customerDetails,
      projectDetails: formData.projectDetails,
      needChallenges: formData.challenges,
      solutionProvided: formData.solution,
      customerAndMindtreeBenefits: formData.benefits,
      executiveSummaryOfTheCaselet: formData.executionSummary
    });
  }

  convertCaseletFormToJSON() {
    let mid = '';

    mid = this.mid;

    const tags = this.caseletForm.get('tags').value ? this.caseletForm.get('tags').value : [];
    const newTagsSet = new Set();
    tags.map(tag => {
      newTagsSet.add(tag.toLowerCase());
    });
    const newTags = Array.from(newTagsSet);

    const technologies = this.caseletForm.get('technologies').value ? this.caseletForm.get('technologies').value : [];

    const newTechnologiesSet = new Set();
    technologies.map(technology => {
      newTechnologiesSet.add(technology.display.toLowerCase());
    });
    const newTechnologies = Array.from(newTechnologiesSet);

    const tools = this.caseletForm.get('tools').value ? this.caseletForm.get('tools').value : [];
    const newToolsSet = new Set();
    tools.map(tool => {
      newToolsSet.add(tool.display.toLowerCase());
    });
    const newTools = Array.from(newToolsSet);

    const experts = [];

    const story = {
      account: this.caseletForm.get('account').value,
      title: this.caseletForm.get('title').value,
      coverImage: this.coverImage,
      vertical: this.caseletForm.get('vertical').value,
      domain: this.caseletForm.get('domain').value,
      expertsOfTopic: experts,
      engineering: this.caseletForm.get('engineering').value,
      tags: newTags,
      technologies: newTechnologies,
      tools: newTools,
      offering: this.caseletForm.get('offering').value,
      subVertical: this.caseletForm.get('industry').value,
      subPractice: this.caseletForm.get('service').value,
      practice: this.caseletForm.get('practice').value,
      contract: this.caseletForm.get('contract').value,
      userMid: mid,
      customer: {
        name: this.caseletForm.get('customerName').value,
        details: this.caseletForm.get('customerDetails').value
      },
      userDetails: {
        name: '',
        email: ''
      },
      editedFields: [],
      projectDetails: this.caseletForm.get('projectDetails').value,
      benefits: this.caseletForm.get('customerAndMindtreeBenefits').value,
      challenges: this.caseletForm.get('needChallenges').value,
      solution: this.caseletForm.get('solutionProvided').value,
      executionSummary: this.caseletForm.get('executiveSummaryOfTheCaselet').value
    };
    return story;
  }

  buildCaseletForm() {
    this.caseletForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      experts: [''],
      technologies: [''],
      tools: [''],
      tags: [''],
      account: [''],
      vertical: [''],
      domain: [''],
      offering: [''],
      engineering: [''],
      practice: [''],
      contract: [''],
      industry: [''],
      service: [''],
      customerName: [''],
      customerDetails: [''],
      projectDetails: [''],
      needChallenges: [''],
      solutionProvided: [''],
      customerAndMindtreeBenefits: [''],
      executiveSummaryOfTheCaselet: ['']
    });
  }

  onApproveCaselet() {
    const story = this.convertCaseletFormToJSON();
    const confirmation = confirm('Do you want to approve caselet ? ');
    if (confirmation) {
      this.dataService.getUserData(this.mid).subscribe((response) => {
        story.userDetails.name = response.value[0].displayName;
        story.userDetails.email = response.value[0].mail;
        console.log(response);
      this.caseletSerivce.approveCaselet(story).subscribe((responseApprove) => {
        alert('Caselet Approved!');
        this.router.navigate(['/']);
      });
      });
    } else {
      console.log(false);
    }
  }

  incrementStep() {
    this.stepCount++;
  }

  decrementStep() {
    this.stepCount--;
  }

  onRejectCaselet() {
    const payload = {
      message: this.rejectComment,
      userDetails: {
        name: '',
        email: ''
      }
    };
    const id = this.storyAdded.id;
    this.dataService.getUserData(this.mid).subscribe((response) => {
      payload.userDetails.name = response.value[0].displayName;
      payload.userDetails.email = response.value[0].mail;
      this.caseletSerivce.rejectCaselet(payload, id).subscribe((responseRejected: any) => {
        alert('Caselet rejected!');
        this.router.navigate(['user/admin/pendingCaselets']);
      });
    });
  }

  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      this.caseletSerivce.saveImage(file).subscribe((response: any) => {
        this.coverImage = response.data.imageUrl;
        console.log(this.coverImage);
      }, error => {
        console.log(error);
      });
    }
  }
}
