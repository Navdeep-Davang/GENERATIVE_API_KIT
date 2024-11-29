import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

// Completions 1 Service
	createCompletion(createCompletionDto: CreateCompletionDto) {
		return this.openai.completions.create(createCompletionDto);
	}

// Embeddings 1 Service
	createEmbedding(createEmbeddingDto: CreateEmbeddingDto) {
	return this.openai.embeddings.create(createEmbeddingDto);
	}

// Files 6 Services
	createFile(createFileDto: CreateFileDto) {
		return this.openai.files.create(createFileDto);
	}

	retrieveFile(fileId: string) {
		return this.openai.files.retrieve(fileId);
	}

	listFiles(query: ListFilesDto) {
		return this.openai.files.list(query);
	}

	deleteFile(fileId: string) {
		return this.openai.files.del(fileId);
	}

	getFileContent(fileId: string) {
		return this.openai.files.content(fileId);
	}

	waitForProcessing(fileId: string) {
		return this.openai.files.waitForProcessing(fileId);
	}

// Images 3 Services
	generateImage(generateImageDto: GenerateImageDto) {
		return this.openai.images.generate(generateImageDto);
	}

	createImageVariation(createImageVariationDto: CreateImageVariationDto) {
		return this.openai.images.createVariation(createImageVariationDto);
	}

	editImage(editImageDto: EditImageDto) {
		return this.openai.images.edit(editImageDto);
	}

// Audio 3 Services
	createTranscription(createTranscriptionDto: CreateTranscriptionDto) {
		return this.openai.audio.transcriptions.create(createTranscriptionDto);
	}

	createTranslation(createTranslationDto: CreateTranslationDto) {
		return this.openai.audio.translations.create(createTranslationDto);
	}

	generateSpeech(generateSpeechDto: GenerateSpeechDto) {
		return this.openai.audio.speech.create(generateSpeechDto);
	}

// Moderations 1 Service
	createModeration(createModerationDto: CreateModerationDto) {
		return this.openai.moderations.create(createModerationDto);
	}

// Models 3 Services
	retrieveModel(modelId: string) {
		return this.openai.models.retrieve(modelId);
	}

	listModels() {
		return this.openai.models.list();
	}

	deleteModel(modelId: string) {
		return this.openai.models.del(modelId);
	}

  // Fine-tuning Jobs 6 Services
	createFineTuningJob(createFineTuningJobDto: CreateFineTuningJobDto) {
		return this.openai.fineTuning.jobs.create(createFineTuningJobDto);
	}

	retrieveFineTuningJob(jobId: string) {
		return this.openai.fineTuning.jobs.retrieve(jobId);
	}

	listFineTuningJobs(query: ListFineTuningJobsDto) {
		return this.openai.fineTuning.jobs.list(query);
	}

	cancelFineTuningJob(jobId: string) {
		return this.openai.fineTuning.jobs.cancel(jobId);
	}

	listFineTuningJobEvents(jobId: string, query: ListFineTuningJobEventsDto) {
		return this.openai.fineTuning.jobs.listEvents(jobId, query);
	}

	listFineTuningJobCheckpoints(jobId: string, query: ListFineTuningJobCheckpointsDto) {
		return this.openai.fineTuning.jobs.checkpoints.list(jobId, query);
	}

  // Batches 4 Services
	createBatch(createBatchDto: CreateBatchDto) {
		return this.openai.batches.create(createBatchDto);
	}

	retrieveBatch(batchId: string) {
		return this.openai.batches.retrieve(batchId);
	}

	listBatches(query: ListBatchDto) {
		return this.openai.batches.list(query);
	}

	cancelBatch(batchId: string, cancelBatchDto: CancelBatchDto) {
		return this.openai.batches.cancel(batchId, cancelBatchDto);
	}

  // Uploads 4 Services
	createUpload(createUploadDto: CreateUploadDto) {
		return this.openai.uploads.create(createUploadDto);
	}

	cancelUpload(uploadId: string, cancelUploadDto: CancelUploadDto) {
		return this.openai.uploads.cancel(uploadId, cancelUploadDto);
	}

	completeUpload(uploadId: string, completeUploadDto: CompleteUploadDto) {
		return this.openai.uploads.complete(uploadId, completeUploadDto);
	}

	createPart(uploadId: string, createPartDto: CreatePartDto) {
		return this.openai.uploads.parts.create(uploadId, createPartDto);
	}
}
